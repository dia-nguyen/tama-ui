class Tamagotchi {
  constructor({ type = "eggy", name }) {
    // this.name = prompt("What is my name?");
    this.type = type;
    this.name = name;
  }

  hatch() {
    const babies = ["petit", "shiro"];
    if (this.type === "eggy") {
      this.type = babies[Math.floor(Math.random() * babies.length)];
    }
  }
  age() {
  }
}
