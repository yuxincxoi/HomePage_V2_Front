import "tailwindcss/tailwind.css";
import { useState } from "react";
import EachComment from "./EachComment";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const onChange = (e) => setComment(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (comment === "") return;
    setComment("");
    setComments((currentArray) => [comment, ...currentArray]);
  };
  return (
    <div>
      <div class="grid place-items-center">
        <div class="p-2 w-3/4 font-roka">
          <span class="pr-2">Comments</span>
          <span class="text-green-500">{comments.length}</span>
        </div>
      </div>
      <div class="grid place-items-center">
        <form class="w-3/4 font-naba" onSubmit={onSubmit}>
          <input
            class="w-96 py-2 px-3 placeholder:italic bg-neutral-50 focus:bg-white focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 rounded-lg"
            onChange={onChange}
            value={comment}
            placeholder="댓글을 입력하세요 . . ."
            type="text"
          />
          <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-600 m-2">
            작성
          </button>
        </form>
        <ul class="w-3/4">
          <EachComment comments={comments} />
        </ul>
      </div>
    </div>
  );
}
