group = null;

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

class Group {
    constructor() {
      this.participants = [];
      this.activities = [];
    }
  
    // Method to add a participant to the group
    addParticipant(participant) {
      this.participants.push(participant);
    }
  
    // Method to create a new activity for the group
    createActivity(description, amount, payer, participants) {
      const activity = new Activity(description, amount, payer, participants);
      this.activities.push(activity);
    }

    // Method to display all participants in the group
    displayParticipants() {
        this.participants.forEach(participant => {
            participant.displayDetails();
            console.log('-----');
        });
    }
  }
  
  class Activity {
    constructor(description, amount, payer, participants) {
      this.description = description;
      this.amount = amount;
      this.payer = payer;
      this.participants = participants;
    }
  }
  
//   const group = new Group();

function createGroup() {
    
  
    // Create an instance of the Group class
    group = new Group();
  
    // Add participants to the group

  
    // Display all participants in the group
    group.displayParticipants();
  
    // Create box element for the group
    const groupContainer = document.getElementById("group-container");
    groupContainer.innerHTML = ""; // Clear existing content
  
    const boxElement = document.createElement("div");
    boxElement.classList.add("box");
  
    group.participants.forEach(participant => {
      const participantDetails = document.createElement("p");
      participantDetails.textContent = `Name: ${participant.name}, Dept: ${participant.dept}, Wallet Address: ${participant.walletAddress}`;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove Participant";
      removeButton.addEventListener("click", () => {
        group.removeParticipant(participant);
        boxElement.removeChild(participantDetails);
        boxElement.removeChild(removeButton);
      });
  
      boxElement.appendChild(participantDetails);
      boxElement.appendChild(removeButton);
    });
  
    const addParticipantButton = document.createElement("button");
    addParticipantButton.textContent = "Add Participant";
    addParticipantButton.addEventListener("click", () => {
      const name = prompt("Enter participant name:");
      const dept = prompt("Enter participant department:");
      const walletAddress = prompt("Enter participant wallet address:");
  
      if (name && dept && walletAddress) {
        const newParticipant = new Participant(name, dept, walletAddress);
        group.addParticipant(newParticipant);
  
        const newParticipantDetails = document.createElement("p");
        newParticipantDetails.textContent = `Name: ${newParticipant.name}, Dept: ${newParticipant.dept}, Wallet Address: ${newParticipant.walletAddress}`;
  
        const newRemoveButton = document.createElement("button");
        newRemoveButton.textContent = "Remove Participant";
        newRemoveButton.addEventListener("click", () => {
          group.removeParticipant(newParticipant);
          boxElement.removeChild(newParticipantDetails);
          boxElement.removeChild(newRemoveButton);
        });
  
        boxElement.insertBefore(newParticipantDetails, addParticipantButton);
        boxElement.insertBefore(newRemoveButton, addParticipantButton);
      }
    });
  
    boxElement.appendChild(addParticipantButton);
    groupContainer.appendChild(boxElement);
  }

function activityForm() {
    var down = document.getElementById("GFG_DOWN");
    function GFG_Fun() {
        
        // Create a form dynamically
        var form = document.createElement("form");
        // form.setAttribute("method", "post");
        // form.setAttribute("action", "submit.php");

        // Create an input element for emailID
        var activityName = document.createElement("input");
        activityName.setAttribute("type", "text");
        activityName.setAttribute("name", "activityName");
        activityName.setAttribute("placeholder", "Activity Name");

        var payerName = document.createElement("input");
        payerName.setAttribute("type", "text");
        payerName.setAttribute("name", "payerName");
        payerName.setAttribute("placeholder", "Payer Name");

        var amount = document.createElement("input");
        amount.setAttribute("type", "number");
        amount.setAttribute("name", "amount");
        amount.setAttribute("placeholder", "amount");

        group.participants.forEach(participant => {
                const participantCheckbox = document.createElement("input");
                const label = document.createElement("label");
                label.textContent = participant.name;
                participantCheckbox.type = "checkbox";
                participantCheckbox.name = participant.name;
                form.append(label);
                form.append(participantCheckbox);
        })

        var addExpense = document.createElement("button");
       
        // Create a submit button
        // var s = document.createElement("input");
        // s.setAttribute("type", "submit");
        // s.setAttribute("value", "Submit");

        // Append the email_ID input to the form
        form.append(activityName);
        form.append(payerName);
        form.append(amount);
        form.append(addExpense);
        const participantnone = null;

        document.getElementsByTagName("body")[0].appendChild(form);
        
        addExpense.addEventListener("click", function() {
            group.createActivity(activityName, amount, payerName, participantnone);
            console.log(group);
            renderActivities();
            
        })

        // group.createActivity(description, amount, payer, selectedParticipants)
    }
    GFG_Fun();
    // const form = document.createElement("div");
    // form.className = "popup-form";

    // // Create the form fields
    // // var nameLabel = document.createElement("label");
    // // nameLabel.textContent = "Name:";
    // // nameLable.setAtributes("for", "name");
    // var nameInput = document.createElement("input");
    // nameInput.setAttribute("type", "text");
    // // nameInput.name = "name";



    // // Append the form fields to the form element
    // form.appendChild(nameLabel);
    // form.appendChild(nameInput);
    // // form.appendChild(document.createElement("br"));
    // // form.appendChild(document.createElement("br"));
    // // form.appendChild(emailLabel);
    // // form.appendChild(emailInput);
    // // form.appendChild(document.createElement("br"));
    // // form.appendChild(document.createElement("br"));
    // // form.appendChild(submitButton);

    // // Append the form element to the document body
    // document.body.appendChild(form);

    // // Display the form
    // form.style.display = "block";

}

function createActivity() {

    activityForm();
//   const description = prompt("Enter activity description:");
//   const amount = parseFloat(prompt("Enter activity amount:"));
//   const payerName = prompt("Enter payer's name:");
//   const payerDept = prompt("Enter payer's department:");
//   const payerWalletAddress = prompt("Enter payer's wallet address:");

//   const payer = new Participant(payerName, payerDept, payerWalletAddress);

//   const participants = [];
//   group.participants.forEach(participant => {
//     if (participant !== payer) {
//       participants.push(participant);
//     }
//   });

//   const selectedParticipants = [];
//   group.participants.forEach(participant => {
//     const participantCheckbox = document.createElement("input");
//     participantCheckbox.type = "checkbox";
//     participantCheckbox.name = participant.name;
    // participantCheckbox.id = `payer-checkbox-${participant.walletAddress}`;
    // participantCheckbox.value = participant.walletAddress
//   })
//   participants.forEach(participant => {
//     const checkbox = document.getElementById(`participant-checkbox-${participant.walletAddress}`);
//     if (checkbox.checked) {
//       selectedParticipants.push(participant);
//     }
//   });

//   group.createActivity(description, amount, payer, selectedParticipants);

//   renderActivities();
}

function renderActivities() {
  const activityContainer = document.getElementById("activity-container");
  activityContainer.innerHTML = ""; // Clear existing content

  group.activities.forEach(activity => {
    const boxElement = document.createElement("div");
    boxElement.classList.add("activity-box");

    const activityDetails = document.createElement("p");
    activityDetails.textContent = `Description: ${activity.description}, Amount: ${activity.amount}`;

    const payerDetails = document.createElement("p");
    payerDetails.textContent = `Payer: ${activity.payer.name}, Dept: ${activity.payer.dept}, Wallet Address: ${activity.payer.walletAddress}`;

    const participantsDetails = document.createElement("p");
    const participantsList = activity.participants.map(participant => `${participant.name} (${participant.dept})`).join(", ");
    participantsDetails.textContent = `Participants: ${participantsList}`;

    boxElement.appendChild(activityDetails);
    boxElement.appendChild(payerDetails);
    boxElement.appendChild(participantsDetails);

    activityContainer.appendChild(boxElement);
  });
}

// function renderParticipantCheckboxes() {
//   const groupContainer = document.getElementById("group-container");
//   groupContainer.innerHTML = ""; // Clear existing content

//   group.participants.forEach(participant => {
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.id = `participant-checkbox-${participant.walletAddress}`;

//     const label = document.createElement("label");
//     label.textContent = `${participant.name} (${participant.dept})`;
//     label.htmlFor = `participant-checkbox-${participant.walletAddress}`;

//     groupContainer.appendChild(checkbox);
//     groupContainer.appendChild(label);
//     groupContainer.appendChild(document.createElement("br"));
//   });
// }



 

// Khởi tạo danh sách các khoản vay nợ
let expenses = [];

// Lấy các phần tử HTML cần thiết
const descriptionInput = document.getElementById("description-input");
const amountInput = document.getElementById("amount-input");
const payerInput = document.getElementById("payer-input");
const participantsInput = document.getElementById("participants-input");
const expensesContainer = document.getElementById("expenses-container");

// Hàm thêm khoản vay nợ
function addExpense() {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const payer = payerInput.value;
    const participants = participantsInput.value.split(",").map(participant => participant.trim());
  
    if (description && !isNaN(amount) && payer && participants.length > 0) {
      const expense = {
        description,
        amount,
        payer,
        participants
      };
  
      expenses.push(expense);
      calculateShares();
      renderExpenses();
  
      // Đặt lại giá trị trong form
      descriptionInput.value = "";
      amountInput.value = "";
      payerInput.value = "";
      participantsInput.value = "";
    }
  }
  
  // Hàm tính toán số tiền mà mỗi người tham gia cần trả
  function calculateShares() {
    expenses.forEach(expense => {
      const totalParticipants = expense.participants.length;
      const individualShare = expense.amount / totalParticipants;
  
      expense.participants.forEach(participant => {
        if (participant !== expense.payer) {
          // Tìm người tham gia trong danh sách khoản vay nợ và cập nhật số tiền cần trả
          const participantExpense = expenses.find(exp => exp.description === expense.description && exp.payer === participant);
          if (participantExpense) {
            participantExpense.amount += individualShare;
          } else {
            // Tạo khoản vay nợ mới cho người tham gia
            expenses.push({
              description: expense.description,
              amount: individualShare,
              payer: participant,
              participants: []
            });
          }
        }
      });
    });
  }  


// Hàm hiển thị danh sách các khoản vay nợ
function renderExpenses() {
  expensesContainer.innerHTML = "";

  expenses.forEach(expense => {
    const expenseElement = document.createElement("div");
    expenseElement.innerHTML = `
      <p><strong>Description:</strong> ${expense.description}</p>
      <p><strong>Amount:</strong> ${expense.amount}</p>
      <p><strong>Payer:</strong> ${expense.payer}</p>
      <p><strong>Participants:</strong> ${expense.participants.join(", ")}</p>
      <hr>
    `;

    expensesContainer.appendChild(expenseElement);
  });
}
