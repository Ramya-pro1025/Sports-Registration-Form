
        // Selecting elements
        var nameInput = document.getElementById("name");
        var ageInput = document.getElementById("age");
        var countryInput = document.getElementById("country");
        var teamInput = document.getElementById("team");
        var positionInput = document.getElementById("position");
        var emailInput = document.getElementById("email");
        var saveBtn = document.getElementById("saveBtn");
        var playerList = document.getElementById("playerList");
    

        // Button click event
        saveBtn.addEventListener("click", function() {
            // Checks if any input field is empty
            if (!nameInput.value || !ageInput.value || !countryInput.value || !teamInput.value || !positionInput.value || !emailInput.value) {
            alert("Please fill out all fields.");
            return;
        }

            if (!nameInput.value || !ageInput.value || !countryInput.value || !teamInput.value || !positionInput.value || !emailInput.value) {
                alert("Please fill out all fields.");
                return;
            }
            
            // Creating a new row
            var row = document.createElement("tr");
            //
            row.innerHTML = `
            <td>${nameInput.value}</td>
            <td>${ageInput.value}</td>
            <td>${countryInput.value}</td>
            <td>${teamInput.value}</td>
            <td>${positionInput.value}</td>
            <td>${emailInput.value}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
          /// Add the row to the playerlist
            playerList.appendChild(row);

            // Attach delete event to the new row's delete button
            var deleteButton = row.querySelector(".delete-btn");
            deleteButton.addEventListener("click", function () {
                row.remove();//Remove row when "Delete" button is clicked
            });

             // Clear input fields after adding
             nameInput.value = "";
            ageInput.value = "";
            countryInput.value = "";
            teamInput.value = "";
            positionInput.value = "";
            emailInput.value = "";
        });

    