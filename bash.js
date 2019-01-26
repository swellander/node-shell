// console.log("process", process);

process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", function(data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === "pwd") {
    //find current dir
    //print result to stdout
    const path = process.mainModule.filename;
    process.stdout.write(path);
  } else if (cmd === "date") {
    process.stdout.write(Date.now().toString());
  }

  process.stdout.write("\nprompt > ");
});
