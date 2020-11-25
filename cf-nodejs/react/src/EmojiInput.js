import React, { useState } from 'react';
import { FormGroup, InputGroup, FormLabel, FormItem, FormInput, Button } from 'fundamental-react';

/**
 * An input that collects non empty strings
 * on submit.
 */
const EmojiInput = ({ submit }) => {
  const inputRef = React.createRef();

  const [state, setState] = useState('normal');

  const setError = () => {
    setState('invalid');
  }

  const setNormal = () => {
    setState('normal');
  };

  const onSubmit = ($event) => {
    $event.preventDefault();
    
    if (!inputRef.current.value) {
      return setError();
    }

    const names = inputRef.current.value.split(',').reduce((acc, name) => {
      const trimmed = name.trim();
      if (trimmed) {
        acc.push(trimmed);
      }
      return acc;
    }, []);

    if (!names.length) {
      return setError();
    }

    setNormal();
    submit(names);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormGroup>
        <FormLabel>
          Enter each of your teammate's name separated by commas.
        </FormLabel>
        <FormItem>
          <InputGroup>
            <FormInput placeholder="Brian, Mick, Keith, Bill, Charlie" ref={inputRef} state={state} />
            <InputGroup.Addon isButton>
              <Button option="light" typeAttr="submit">
                Emojify!
              </Button>
            </InputGroup.Addon>
          </InputGroup>
        </FormItem>
      </FormGroup>
    </form>
  );
};

export default EmojiInput;