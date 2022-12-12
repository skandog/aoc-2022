var dummyInput = "$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k";
var splitShit = dummyInput.split("\n");
console.log(splitShit);
var dirs = {};
for (var line in splitShit) {
    console.log(splitShit[line]);
    // finds directories with nested
    if (splitShit[line].includes("cd") && !splitShit[line].includes("..")) {
        var dic = splitShit[line].charAt(splitShit[line].length - 1);
        dirs[dic] = {};
    }
    // looking for sizes now
    if (splitShit[line].includes("ls")) {
    }
}
console.log(dirs);
