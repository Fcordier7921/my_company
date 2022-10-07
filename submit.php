<?php
session_start();
$errors = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (empty($_POST['recaptcha-response'])) {
        header('Location: index.php#contact');
    } else {

        $url = "https://www.google.com/recaptcha/api/siteverify?secret=6LcpDlMiAAAAAI_wsROICVnZDSnAz8wEHsIOpwPM&response={$_POST['recaptcha-response']}";

        if (function_exists('curl_version')) {
            $curl = curl_init($url);
            curl_setopt($curl, CURLOPT_HEADER, false);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_TIMEOUT, 1);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
            $response = curl_exec($curl);
        } else {
            // On utilisera file_get_contents
            $response = file_get_contents($url);
        }

        if (empty($response) || is_null($response)) {
            header('Location: index.php#contact');
            $_SESSION['errorsCapcha'] = 1;
        } else {
            $data = json_decode($response);
            if ($data->success) {
                // Google a répondu avec un succès
                // On traite le formulaire
                if (!array_key_exists('name', $_POST) || $_POST['name'] == '') {
                    $errors['name'] = "Vous n'avez pas renseigné votre nom";
                }
                if (!array_key_exists('firstName', $_POST) || $_POST['firstName'] == '') {
                    $errors['firstName'] = "Vous n'avez pas renseigné votre prénom";
                }
                if (!array_key_exists('email', $_POST) || $_POST['email'] == '' || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
                    $errors['email'] = "Vous n'avez pas renseigné un email valide";
                }
                if (!array_key_exists('message', $_POST) || $_POST['message'] == '') {
                    $errors['message'] = "Vous n'avez pas renseigné un message";
                }


                if (!empty($errors)) {
                    $_SESSION['errors'] = $errors;
                    $_SESSION['inputs'] = $_POST;
                    header('location: index.php#contact');
                } else {


                    $message = htmlspecialchars($_POST['message']);
                    $headers = array(

                        'Content-type' => ' text/html; charset=utf-8',
                        'From' => 'contact@f-cordier.fr',
                        'Reply-To' => strip_tags($_POST['email']),
                        'X-Mailer' => 'PHP/' . phpversion(),

                    );

                    $retour = mail('fredericcordierpro6@gmail.com', 'Depuis le site f-cordier.fr => ' . strip_tags($_POST['name']) . ' ' . strip_tags($_POST['firstName']) .', demande d\'information', $message, $headers);
                    if ($retour) {
                        $_SESSION['success'] = 1;
                    } else {
                        $_SESSION['errorsEmail'] = 1;
                    }
                    header('location: index.php#contact');
                }
            } else {
                header('Location: index.php#contact');
                $_SESSION['errorsCapcha'] = 2;
            }
        }
    }
} else {
    http_response_code(405);
    echo 'Méthode non autorisée';
}
