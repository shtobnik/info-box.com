<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 //EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

	<head>
		<title>EPAM task</title>
		<meta http-equiv="content-type" content="text/html; utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="content-language" content="ru">
		<link rel="stylesheet" type="text/css" href="css/main.css" media="all">
		<!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="/css/ie.css" media="all"><![endif]-->
		<!--[if lte IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<script src="js/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
	</head>

	<body>
		{json file="/home/info-box.com/www/src/info_box.json" assign="data"}
		
		<div class="wrapper">
			<header>
				<h1>json task</h1>
			</header>

			<div class="slider-b">

				<section class="slider-content">				
					<ul class="slider-l">
						{foreach from=$data item=item}
							<li class="slider-l-i">
								<img src="/img/photos/{$item.img}">
								<div class="slider-l-i-content">
									<h2>{$item.title}</h2>
									<div class="note">
										<p>{$item.description}</p>
										<p class="gray">{$item.note}</p>								
									</div>
										<a href="#">show details</a>
								</div>
							</li>
						{/foreach}
					</ul>
					<a href="#" class="btn left">Prev</a>
					<a href="#" class="btn right">Next</a>
					<a href="#" class="btn store">Find a Store</a>
				</section>

			</div>
		</div>
	</body>
	

</html>