<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition()
    {
        return [
            'post_creator' => $this->faker->name(),
            'title' => $this->faker->text(50),
            'created_time' => now(),
            'description' => $this->faker->text(50), 
            'user_id' => rand(1,3),
        ];
    }
    protected static function newFactory()
    {
        return PostFactory::new();
    }
}
