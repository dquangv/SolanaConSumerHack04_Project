class Participant {
    constructor(name, dept, walletAddress) {
      this.name = name;
      this.dept = dept;
      this.walletAddress = walletAddress;
    }
  
    // Method to display participant details
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Department: ${this.dept}`);
      console.log(`Wallet Address: ${this.walletAddress}`);
    }
  }
  
  // Create instances of the Participant class
  const participant1 = new Participant("John Doe", "Finance", "0x123456789");
  const participant2 = new Participant("Jane Smith", "Marketing", "0x987654321");
  
  // Access the properties and methods of the participant instances
  participant1.displayDetails();
  participant2.displayDetails();
  