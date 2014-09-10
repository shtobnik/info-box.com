<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 //EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

	<head>
		<title>info-box task</title>
		<meta http-equiv="content-type" content="text/html; utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="content-language" content="ru">
		<link rel="stylesheet" type="text/css" href="css/main.css" media="all">
		<!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="/css/ie.css" media="all"><![endif]-->
		<!--[if lte IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<script src="js/jquery-1.9.1.min.js"></script>
		<script src="js/jquery.carouFredSel-6.2.1.js"></script>
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
					<div class="list-wrap">
						<ul class="slider-l" id="slider">
							{foreach from=$data item=item}
								<li class="slider-l-i">
									<img src="/img/photos/{$item.img}">
									<div class="slider-l-i-content">
										<h2>{$item.title}</h2>
										<div class="note">
											<p>{$item.description}</p>
											<p class="gray">{$item.note}</p>								
										</div>
										<a href="#" name="details">show details</a>
									</div>
								</li>
							{/foreach}
						</ul>
					</div>
					<div class="btns clearfix">
						<a href="#" class="btn left" id="prev"><i></i><span>Prev</span></a>
						<a href="#" class="btn right" id="next"><span>Next</span><i></i></a>
						<a href="{$item.productUrl}" class="btn right store"><span>Find a Store</span><i></i></a>
					</div>
				</section>

			</div>
		</div>
	</body>
	

</html>