<?php
$r = rand(1, 6);
$map = [
    1 => ['png' => 'one.png', 'gif' => 'one.gif'],
    2 => ['png' => 'two.png', 'gif' => 'two.gif'],
    3 => ['png' => 'three.png', 'gif' => 'three.gif'],
    4 => ['png' => 'four.png', 'gif' => 'four.gif'],
    5 => ['png' => 'five.png', 'gif' => 'five.gif'],
    6 => ['six' => 'six.png', 'gif' => 'six.gif']
];
?>

<?php
    //Meta data
    $title = 'PlayAsAService (PaaS) Dice Roll';
    $description = 'Play as a Service dice roll';
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
    <meta property="og:image" content="<?php echo $map[$r]['gif']; ?>"/>
    <meta property="og:image:width" content="192"/>
    <meta property="og:image:height" content="192"/>
    <meta name="twitter:card" content="<?php echo $twitter_card; ?>">
    <meta name="twitter:creator" content="<?php echo $twitter_creator; ?>">
    <meta name="twitter:title" content="<?php echo $twitter_title; ?>">
    <meta name="twitter:description" content="<?php echo $twitter_description; ?>">
    <meta name="twitter:image" content="<?php echo $map[$r]['gif']; ?>">
    <link rel="apple-touch-icon" sizes="<?php echo $map[$r]['gif']; ?>">
    <link rel="apple-touch-icon" sizes="<?php echo $map[$r]['gif']; ?>">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="icon" type="image/png" sizes="192x192" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo $map[$r]['gif']; ?>">
    <link rel="manifest" href="./assets/icons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php echo $map[$r]['gif']; ?>">
    <meta name="msapplication-TileImage" content="<?php echo $map[$r]['gif']; ?>">
    <meta name="msapplication-TileImage" content="<?php echo $map[$r]['gif']; ?>">
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