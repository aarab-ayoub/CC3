import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { gettodos } from "../../redux/TodoSlice";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoDiffRemoved } from "react-icons/go";
import style from "./ListTodo.module.css";

const ListTodo = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.todos.data.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettodos());
  }, [dispatch]);
  return (
    <div>
      <h1>Liste Des Taches</h1>
      <div className={style.taches}>
        {data &&
          data
            .filter((item) => item.userId == id)
            .map((item) => (
              <div>
                {item.completed ? (
                  <AiOutlineCheckCircle style={{ color: "green" }} />
                ) : (
                  <GoDiffRemoved style={{ color: "red" }} />
                )}
                {item.todo}
              </div>
            ))}
      </div>
    </div>
  );
};

export default ListTodo;
