{question.questionType === "mcq" ? (
  question.options.map((opt, i) => (
    <button key={i} onClick={() => handleAnswer(opt)}>
      {opt}
    </button>
  ))
) : (
  <input
    type="text"
    placeholder="Type your answer"
    onBlur={(e) => handleAnswer(e.target.value)}
  />
)}