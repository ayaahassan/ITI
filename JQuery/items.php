<?php
	$items = [
		[
			'name' => ' Double Whopper ',
			'price' => 10,
			'image' => 'images/1.jpg',
            'description' => ' Bun 5 inch, 2 pcs whopper patties, tomatoes, lettuce, onion, pickles, ketchup and mayonnaise '
		],
		[
			'name' => ' Whopper ',
			'price' => 70,
			'image' => 'images/2.jpg',
            'description' => ' Bun 4.5 inch, whopper patty, American cheese, beef bacon, mayonnaise, lettuce, tomato, fried onion '

		],
		[
			'name' => ' Chicken Royal ',
			'price' => 30,
			'image' => 'images/3.jpg',
            'description' => ' Bun 7 inch, chicken royal patty, lettuce and mayonnaise '
		],
        [
			'name' => '   Swiss Mushroom Single   ',
			'price' => 30,
			'image' => 'images/4.jpg',
            'description' => ' Bun 5 inch, whopper patty, 2 Swiss cheese, mushroom sauce '
		],
        [
			'name' => '  Chicken Burger  ',
			'price' => 30,
			'image' => 'images/5.jpg',
            'description' => ' Bun 4 inch, chicken burger patty, lettuce and mayonnaise '
		],
        [
			'name' => ' Steakhouse Beef ',
			'price' => 30,
			'image' => 'images/6.jpg',
            'description' => ' Bun 4.5 inch, whopper patty, American cheese, beef bacon, mayonnaise, lettuce, tomato, fried onion '
		],
		[
			'name' => '  Fiery Crunchy  ',
			'price' => 60,
			'image' => 'images/7.jpg',
            'description' => ' Bun 4.5 inch, whopper patty, American cheese, beef bacon, mayonnaise, lettuce, tomato, fried onion '
		],
		[
			'name' => '  Fiery Royal Spicy ',
			'price' => 80,
			'image' => 'images/8.jpg',
            'description' => ' Bun 4.5 inch, whopper patty, American cheese, beef bacon, mayonnaise, lettuce, tomato, fried onion '
		]
	];


	header('Content-type: application/json');

   // echo count($items);
   echo json_encode($items);
	die();
	//header('HTTP/1.0 403 Forbidden');