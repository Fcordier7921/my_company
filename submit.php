<?php
session_start();
$errors =[];

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


if(!empty($errors)){
    $_SESSION['errors'] = $errors;
    $_SESSION['inputs'] = $_POST;
    header('location: index.php#contact');
}else{

    $_SESSION['success'] = 1;
    $message=$_POST['message'];
    $headers= 'FROM:'.$_POST['email'];
    
    mail('fredericcordierpro6@gmail.com', 'Tu as été contacté par '.$_POST['name'].' '.$_POST['firstName'] , $message, $headers);
    header('location: index.php#contact');
    
}














// class Recaptcha{

//     private $secret;

//     function __construct($secret){
//         $this->secret = $secret;
//     }

//     public function checkCode($code){
//         if(empty($code)){
//             return false;
//         }

//         $url= "https://www.google.com/recaptcha/api/siteverify?secret={$this->secret}&response={$code}";

//         if(function_exists('curl-version')){
//             $curl = curl_init($url);
//             curl_setopt($curl, CURLOPT_HEADER, false);
//             curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//             curl_setopt($curl, CURLOPT_TIMEOUT, 1);
//             curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
//             $response=curl_exec($curl);

//         }else{
//             $response=file_get_contents($url);
//         }

//         if(empty($response) || is_null($response)){
//             return false;
//         }

//         $json=json_decode($response);
        
//         return $json->success;
//     }

    

// }