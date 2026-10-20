/**
 * Dados mockados dos 10 primeiros Pokémon da PokéAPI (Bulbasaur a Caterpie).
 *
 * @type {Pokemon[]}
 */
export const pokemons = [
  {
    "id": 1,
    "name": "bulbasaur",
    "base_experience": 64,
    "height": 7,
    "weight": 69,
    "is_default": true,
    "abilities": [
      {
        "is_hidden": false,
        "slot": 1,
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        }
      },
      {
        "is_hidden": true,
        "slot": 3,
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "stats": [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        }
      }
    }
  },
  {
    "id": 2,
    "name": "ivysaur",
    "base_experience": 142,
    "height": 10,
    "weight": 130,
    "is_default": true,
    "abilities": [
      {
        "is_hidden": false,
        "slot": 1,
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        }
      },
      {
        "is_hidden": true,
        "slot": 3,
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "stats": [
      {
        "base_stat": 60,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 62,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 63,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 60,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
        }
      }
    }
  },
  {
    "id": 3,
    "name": "venusaur",
    "base_experience": 236,
    "height": 20,
    "weight": 1000,
    "is_default": true,
    "abilities": [
      {
        "is_hidden": false,
        "slot": 1,
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        }
      },
      {
        "is_hidden": true,
        "slot": 3,
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ],
    "stats": [
      {
        "base_stat": 80,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 82,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 83,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 100,
        "effort": 2,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 100,
        "effort": 1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 80,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
        }
      }
    }
  },
  {
    "id": 4,
    "name": "charmander",
    "base_experience": 62,
    "height": 6,
    "weight": 85,
    "is_default": true,
    "abilities": [
      {
        "is_hidden": false,
        "slot": 1,
        "ability": {
          "name": "blaze",
          "url": "https://pokeapi.co/api/v2/ability/66/"
        }
      },
      {
        "is_hidden": true,
        "slot": 3,
        "ability": {
          "name": "solar-power",
          "url": "https://pokeapi.co/api/v2/ability/94/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "stats": [
      {
        "base_stat": 39,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 52,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 43,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 60,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 50,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        }
      }
    }
  },
  {
    "id": 5,
    "name": "charmeleon",
    "base_experience": 142,
    "height": 11,
    "weight": 190,
    "is_default": true,
    "abilities": [
      {
        "is_hidden": false,
        "slot": 1,
        "ability": {
          "name": "blaze",
          "url": "https://pokeapi.co/api/v2/ability/66/"
        }
      },
      {
        "is_hidden": true,
        "slot": 3,
        "ability": {
          "name": "solar-power",
          "url": "https://pokeapi.co/api/v2/ability/94/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      }
    ],
    "stats": [
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
        }
      }
    }
  },
  {
    "id": 6,
    "name": "charizard",
    "base_experience": 240,
    "height": 17,
    "weight": 905,
    "is_default": true,
    "abilities": [
      {
        "is_hidden": false,
        "slot": 1,
        "ability": {
          "name": "blaze",
          "url": "https://pokeapi.co/api/v2/ability/66/"
        }
      },
      {
        "is_hidden": true,
        "slot": 3,
        "ability": {
          "name": "solar-power",
          "url": "https://pokeapi.co/api/v2/ability/94/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      }
    ],
    "stats": [
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 84,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 109,
        "effort": 3,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 85,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 100,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
        }
      }
    }
  },
  {
    "id": 7,
    "name": "squirtle",
    "base_experience": 63,
    "height": 5,
    "weight": 90,
    "is_default": true,
    "abilities": [
      {
        "is_hidden": false,
        "slot": 1,
        "ability": {
          "name": "torrent",
          "url": "https://pokeapi.co/api/v2/ability/67/"
        }
      },
      {
        "is_hidden": true,
        "slot": 3,
        "ability": {
          "name": "rain-dish",
          "url": "https://pokeapi.co/api/v2/ability/44/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "stats": [
      {
        "base_stat": 44,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 50,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 43,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        }
      }
    }
  },
  {
    "id": 8,
    "name": "wartortle",
    "base_experience": 142,
    "height": 10,
    "weight": 225,
    "is_default": true,
    "abilities": [
      {
        "is_hidden": false,
        "slot": 1,
        "ability": {
          "name": "torrent",
          "url": "https://pokeapi.co/api/v2/ability/67/"
        }
      },
      {
        "is_hidden": true,
        "slot": 3,
        "ability": {
          "name": "rain-dish",
          "url": "https://pokeapi.co/api/v2/ability/44/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "stats": [
      {
        "base_stat": 59,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 63,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
        }
      }
    }
  },
  {
    "id": 9,
    "name": "blastoise",
    "base_experience": 239,
    "height": 16,
    "weight": 855,
    "is_default": true,
    "abilities": [
      {
        "is_hidden": false,
        "slot": 1,
        "ability": {
          "name": "torrent",
          "url": "https://pokeapi.co/api/v2/ability/67/"
        }
      },
      {
        "is_hidden": true,
        "slot": 3,
        "ability": {
          "name": "rain-dish",
          "url": "https://pokeapi.co/api/v2/ability/44/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      }
    ],
    "stats": [
      {
        "base_stat": 79,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 83,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 100,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 85,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 105,
        "effort": 3,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
        }
      }
    }
  },
  {
    "id": 10,
    "name": "caterpie",
    "base_experience": 39,
    "height": 3,
    "weight": 29,
    "is_default": true,
    "abilities": [
      {
        "is_hidden": false,
        "slot": 1,
        "ability": {
          "name": "shield-dust",
          "url": "https://pokeapi.co/api/v2/ability/19/"
        }
      },
      {
        "is_hidden": true,
        "slot": 3,
        "ability": {
          "name": "run-away",
          "url": "https://pokeapi.co/api/v2/ability/50/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      }
    ],
    "stats": [
      {
        "base_stat": 45,
        "effort": 1,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 30,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 35,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 20,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 20,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
        }
      }
    }
  }
];