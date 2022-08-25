import React from "react";

export default function EachComment({ comments }) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const time = now.getTime() / 1000;
  const hours = String(Math.floor((time % 86400) / 3600)).padStart(2, "0");
  const minutes = String(Math.floor(((time % 86400) % 3600) / 60)).padStart(
    2,
    "0"
  );

  const onModify = () => console.log("수정");
  const onDelete = () => console.log("삭제");
  return (
    <div class="font-naba">
      {comments.map((comments, index) => {
        return (
          <li class="p-3" key={index}>
            <p class="font-bold">김개똥</p>
            <p class="py-1">{comments}</p>
            <div class="text-neutral-400 text-xs">
              <span class="hover:underline pr-2" onClick={onModify}>
                수정
              </span>
              <span class="hover:underline pr-2" onClick={onDelete}>
                삭제
              </span>
              <span>
                {year}.{month}.{date} {hours}:{minutes}
              </span>
            </div>
          </li>
        );
      })}
    </div>
  );
}
