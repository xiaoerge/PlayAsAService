<?php
$r = rand(1, 6);
$map = [
    1 => ['png' => 'https://emz.us/paas/dice/one.png', 'gif' => 'https://emz.us/paas/dice/one.gif'],
    2 => ['png' => 'https://emz.us/paas/dice/two.png', 'gif' => 'https://emz.us/paas/dice/two.gif'],
    3 => ['png' => 'https://emz.us/paas/dice/three.png', 'gif' => 'https://emz.us/paas/dice/three.gif'],
    4 => ['png' => 'https://emz.us/paas/dice/four.png', 'gif' => 'https://emz.us/paas/dice/four.gif'],
    5 => ['png' => 'https://emz.us/paas/dice/five.png', 'gif' => 'https://emz.us/paas/dice/five.gif'],
    6 => ['six' => 'https://emz.us/paas/dice/six.png', 'gif' => 'https://emz.us/paas/dice/six.gif']
];
?>

<?php
    //Meta data
    $title = 'PlayAsAService (PaaS) Dice Roll';
    $description = 'Roll and random dice';
    $author = 'xiaoerge';
    $keywords = 'Play, dice, game, xiaoerge, github, opensource, mit';

    //Facebook Graph
    $fb_app_id = '';
    $fb_admin = '';

    //Open Graph Protocol
    $og_type = 'website';
    $og_url = 'https://github.com/xiaoerge/PlayAsAService';
    $og_description = $description;

    //Twitter Card
    $twitter_card = 'summary';
    $twitter_creator = '@';
    $twitter_title = $title;
    $twitter_description = $description;
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo $description; ?>">
    <meta name="author" content="<?php echo $author; ?>">
    <meta name="keywords" content="<?php echo $keywords; ?>"/>
    <meta property="fb:app_id" content="<?php echo $fb_app_id; ?>"/>
    <meta property="fb:admin" content="<?php echo $fb_admin; ?>"/>
    <meta property="og:title" content="<?php echo $title; ?>"/>
    <meta property="og:type" content="<?php echo $og_type; ?>"/>
    <meta property="og:url" content="<?php echo $og_url; ?>"/>
    <meta property="og:description" content="<?php echo $og_description; ?>"/>
    <meta property="og:image" content="<?php echo $map[$r]['png']; ?>"/>
    <meta property="og:image:width" content="192"/>
    <meta property="og:image:height" content="192"/>
    <meta name="twitter:card" content="<?php echo $twitter_card; ?>">
    <meta name="twitter:creator" content="<?php echo $twitter_creator; ?>">
    <meta name="twitter:title" content="<?php echo $twitter_title; ?>">
    <meta name="twitter:description" content="<?php echo $twitter_description; ?>">
    <meta name="twitter:image" content="<?php echo $map[$r]['png']; ?>">
    <link rel="icon" type="image/png" sizes="192x192" href="<?php echo $map[$r]['png']; ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo $map[$r]['png']; ?>">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo $map[$r]['png']; ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo $map[$r]['png']; ?>">
    <meta name="theme-color" content="#ffffff">
    <title><?php echo $title; ?></title>

    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
</head>

<body>
    <img src="<?php echo $map[$r]['gif'] ?>" width="192" height="192">
</body>
</html>