<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Game;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class DemoUserSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::updateOrCreate(
            ['email' => 'ludic.demo.1@gmail.com'],
            [
                'firstName' => 'Démo',
                'lastName' => 'Ludic',
                'username' => 'demo_ludic',
                'country' => 'CA',
                'password' => Hash::make('DemoLudic1234'),
                'dateOfBirth' => '1995-06-15',
                'infolettre' => true,
                'termsCondition' => true,
                'image' => null,
                'description' => 'Compte de démonstration.',
                'email_verified_at' => now(),
            ]
        );

        $libraryNames = [
            'Elden Ring',
            "Baldur's Gate 3",
            'It Takes Two',
            'Grand Theft Auto IV',
        ];

        $cartNames = [
            'Resident Evil Village',
            'Fallout: New Vegas',
            'The Elder Scrolls V: Skyrim',
            'Red Dead Redemption 2',
        ];

        $this->attachGames($user, $libraryNames, 'library');
        $this->attachGames($user, $cartNames, 'carts');
        $this->attachGames($user, $cartNames, 'wishlists'); // même jeux dans wishlist pour la démo, ajustable
    }

    private function attachGames(User $user, array $names, string $table): void
{
    foreach ($names as $name) {
        $game = Game::where('name', 'like', "%{$name}%")->first();

        if (!$game) {
            $this->command->warn("Jeu introuvable : {$name} (table: {$table})");
            continue;
        }

        // Toutes les tables (library, carts, wishlists) utilisent bien l'id interne
        DB::table($table)->updateOrInsert(
            ['user_id' => $user->id, 'game_id' => $game->id], // ← toujours $game->id maintenant
            ['created_at' => now(), 'updated_at' => now()]
        );
    }
}
}