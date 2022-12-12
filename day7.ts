const dummyInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

let splitShit = dummyInput.split("\n");
console.log(splitShit);

let dirs = {};

for (let line in splitShit) {
  console.log(splitShit[line]);

  // finds directories with nested
  if (splitShit[line].includes("cd") && !splitShit[line].includes("..")) {
    let dic = splitShit[line].charAt(splitShit[line].length - 1);
    dirs[dic] = {};
  }

  // looking for sizes now
  if (splitShit[line].includes("ls")) {
  }
}

console.log(dirs);
