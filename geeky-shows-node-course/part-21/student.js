const studentName = "Pranjal Gogoi";

const marks = (math, sci) => {
  console.log("Total Marks =>", math + sci);
};

// module.exports = { studentName, marks };

// export default studentName;
export { studentName, marks };
