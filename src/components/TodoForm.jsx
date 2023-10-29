import { Box, Button, Heading, Input } from "@chakra-ui/react";

import { useState } from "react";
import { useTodo } from "../contexts/todoContext";

function TodoForm() {
  const [todo, settodo] = useState("");
  const { addTodo } = useTodo();

  const addTodoHandler = () => {
    if (!todo) return;

    addTodo({ todo, completed: false });
    settodo("");
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={10}
    >
      <Heading letterSpacing={7}>TODO APPLICATION</Heading>

      <Box display={"flex"} width={"50%"} gap={5} mt={10}>
        <Input
          type="text"
          placeholder="Enter your todos here..."
          border={"2px solid #CEDEBD"}
          focusBorderColor="#CEDEBD"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <Button onClick={addTodoHandler}>Add</Button>
      </Box>
    </Box>
  );
}

export default TodoForm;
