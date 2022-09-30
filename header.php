<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="assets/img/logofolio.png" />
    <link rel="stylesheet" href="assets/style/styleHeader.css">
    <link rel="stylesheet" href="assets/style/styleFooter.css">
     <?php  
        
        $phpSelf =$_SERVER['PHP_SELF'];
        $newPhpSelf = rtrim($phpSelf, "/ ");
        
        
        if($newPhpSelf == "/index.php" ){
            echo '<title>Développeur web freelance, création de site web & gestion de site web</title>';
            echo '<meta name="description" content="Développeur web freelance, le web vous donne l\'impression d\'être dans une jungle dense. J"élague pour vous cette jungle, en vous créant un site adapté a vos besoin et je gére tout son activité pour vous.">';
            echo '<link rel="stylesheet" href="assets/style/styleIndex.css">';
            echo ' <script src="https://www.google.com/recaptcha/api.js" async defer></script>';
         }else if($newPhpSelf == "/services.php" ){
             echo '<title>Développeur web freelance, création de site web & gestion de site web & sous-traitance</title>';
             echo '<meta name="description" content="Développeur web freelance, le web vous donne l\'impression d\'être dans une jungle dense. J"élague pour vous cette jungle, en vous créant un site adapté a vos besoin et je gére tout son activité pour vous.">';
             echo '<link rel="stylesheet" href="assets/style/styleService.css">';
         }else if($newPhpSelf == "/about.php" ){
             echo '<title>Développeur web freelance, pourquoi faire apelle a un indépendant & en savoir plus sur moi</title>';
             echo "<meta name='description' content='Développeur web freelance, On peut se demander s’il vaut mieux faire appel à une agence où voir embaucher une personne en plus pour vos besoins. Avec un indépendant, vous pouvez échapper au long processus de recrutement et bénéficier d’un service plus adapté tout en maîtrise les coûts. Contrairement aux agences, un indépendant a l’avantage d’être moins cher et de réaliser le projet de A à Z, contrairement à une agence où vous avez affaire au chef de projet qui répartit les missions entre plusieurs personnes. .'>";
             echo '<link rel="stylesheet" href="assets/style/styleAbout.css">';
         }else if($newPhpSelf == "/privacyPolicy.php" ){
             echo '<title>Développeur web freelance, politique de confidencialité </title>';
             echo "<meta name='description' content='Développeur web freelance, Avoir un site internet conforme au RGPD nécessite de suivre trois grands principes, que nous allons ici vous présenter. Le premier est de demander le consentement de l’utilisateur avant la récolte de ses données.'>";
             echo '<link rel="stylesheet" href="assets/style/stylePrivacyPolicy.css"> ';
         }
        
           
    ?>
    
    
    
    

    
    
    
    
    
    
   
</head>

<body>

 <!--                   header and nav                 -->
 <header>

   
<img class="logoScroll" src="assets/img/logoV2blanc.png" alt="Logo de Frédéric cordier développeur web freelance">

<div class="box">
    <div class="contLigne btn1">
        <div class="lignes"></div>
        <div class="lignes"></div>
        <div class="lignes"></div>
    </div>
</div>

<nav>
    <ul>
        <li> <a href="/#presentationSection">Acceuil</a> </li>
        <li><a href="/#about">À propos</a></li>
        <li><a href="/#services">Mes services</a></li>
        <li><a href="/#contact">Contacts</a></li>
        <li>
            <div>

                <a href="https://www.linkedin.com/in/fredericcordierpro6/" target="_blank" rel="noopener noreferrer"><img src="assets/img/linkedin.svg" alt="Accès à la page LinkedIn de Frédéric CORDIER."> </a>
                <a href="https://github.com/Fcordier7921" target="_blank" rel="noopener noreferrer"><img src="assets/img/git.svg" alt="Accès à la page gITHUB de Frédéric CORDIER."></a>
            </div>
        </li>
    </ul>
</nav>
</header>