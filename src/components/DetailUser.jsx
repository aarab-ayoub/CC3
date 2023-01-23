import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getusers } from "../../redux/UserSlice";
import style from "./DetailUser.module.css";
export default function () {
  const { id } = useParams();
  const data = useSelector((state) => state.users.data.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);
  return (
    <div className={style.content}>
      {data &&
        data
          .filter((item) => item.id == id)
          .map((item) => {
            return (
              <div>
                <img src={item.image} alt="" />
                <div className={style.detail}>
                  <p>FirstName :{item.firstName}</p>
                  <p>LasteeName :{item.lastName}</p>
                  <p>age :{item.age}</p>
                  <p>gender :{item.gender}</p>
                  <p>email :{item.email}</p>
                  <p>weight :{item.weight}</p>
                  <p>height:{item.height}</p>
                  <p>birthDate :{item.birthDate}</p>
                  <p>bloodGroup :{item.bloodGroup}</p>
                  <p>eyeColor :{item.eyeColor}</p>
                </div>
              </div>
            );
          })}
      <h1></h1>
    </div>
  );
}
