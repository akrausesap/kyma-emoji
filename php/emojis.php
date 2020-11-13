<?php

/**
 * Get emoji unicodes from the emojis.json file.
 */

return json_decode(
  file_get_contents(__DIR__ . '/emojis.json')
);
 