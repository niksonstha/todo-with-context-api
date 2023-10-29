import { Box, Button, Checkbox, Input } from "@chakra-ui/react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { useTodo } from "../contexts/todoContext";
import PropTypes from "prop-types";

function TodoItems({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { deleteTodo, updateTodo } = useTodo();
  const [isEditable, setIsEditable] = useState(false);

  const updateTodoHandler = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(true);
  };

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgColor={"#9EB384"}
        width={"50%"}
        padding={2}
        borderRadius={"10px"}
        boxShadow={"#9EB384 0px 2px 15px 2px"}
        mt={3}
      >
        <Box display={"flex"} alignItems={"center"} ml={10}>
          <Checkbox />
          <Input
            type="text"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            border={"none"}
            color={"black"}
            isReadOnly={!isEditable}
            _placeholder={{ color: "black", fontWeight: "600" }}
          />
        </Box>
        <Box display={"flex"} gap={2} mr={10}>
          <Button
            _hover={{
              bg: "#435334",
              color: "white",
              transition: "0.4s ease-in-out",
            }}
            onClick={() => {
              if (isEditable) {
                updateTodoHandler();
              } else {
                setIsEditable((prev) => !prev);
              }
            }}
          >
            {isEditable ? "update" : <HiOutlinePencilAlt />}
          </Button>
          <Button
            _hover={{
              bg: "red",
              color: "white",
              transition: "0.4s ease-in-out",
            }}
            onClick={() => deleteTodo(todo.id)}
          >
            <AiOutlineDelete />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

// Define and validate the todo prop using PropTypes
TodoItems.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItems;
