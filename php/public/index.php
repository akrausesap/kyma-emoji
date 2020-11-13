<?php
require __DIR__ . '/../vendor/autoload.php';

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

/**
 * Create a Slim application version 3. See more docs here:
 * http://www.slimframework.com/
 * 
 */
$app = new \Slim\App;

/**
 * POST /api/emojify
 * 
 * @param body A list of names.
 * [string, string, ...]	
 * 	
 * @return payload An array of objects mapping the name to 	
 * an emoji unicode.	
 * 	
 * Example:
 * [string, string, ...]
 * 
 * @return payload An array of objects mapping the name to 
 * an emoji unicode.
 * 
 * Example:
 * [
 *  {
 *     name: string,
 *     emoji: string,
 *	   details: {
 *       category: string,
 *       char: string,
 *       codes: string
 *       name: string,
 *     }
 *  },
 *  {
 *     name: string,
 *     emoji: string,
 *	   details: {
 *       category: string,
 *       char: string,
 *       codes: string
 *       name: string,
 *     }
 *  },
 *  ...
 * ]
 */
$app->post('/api/emojify', function (Request $request, Response $response) {
    $emojis = require __DIR__ . '/../emojis.php';
    $names = $request->getParsedBody();

    $payload = array_map(function ($name) use ($emojis) {
        $emoji = $emojis[array_rand($emojis)];
        
        return [
            'name' => $name,
            'emoji' => $emoji->codes,
			'details'=> $emoji
        ];
    }, $names);

    return $response->withJson($payload);
});

/**
 * GET /
 * 
 * @return payload A hello message.
 */
$app->get('/', function(Request $request, Response $response) {
    return $response->getBody()->write('Hello Kyma!');
});

/**
 * Run the slim app.
 */
$app->run();