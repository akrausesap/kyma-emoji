import React from 'react';
import { Tile } from 'fundamental-react/Tile';

/**
 * A component for displaying an awesome
 * emoji for each person.
 */
const EmojiPerson = ({person}) => {
  return (
    <Tile>
      <Tile.Media>
        {
          /**
           * Don't use dangerouslySetInnerHTML
           * unless you know what you're doing.
           */
        }
        <span style={{
          fontSize: '3rem'
        }} dangerouslySetInnerHTML={{ __html: `${person.details.char}` }}></span>
      </Tile.Media>
      <Tile.Content title={person.name} />
    </Tile>
  )
}

export default EmojiPerson;