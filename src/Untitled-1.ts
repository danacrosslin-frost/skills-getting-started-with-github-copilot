// ...existing code...

// Populate activities list
Object.entries(activities).forEach(([name, details]) => {
  const activityCard = document.createElement("div");
  activityCard.className = "activity-card";

  const spotsLeft = details.max_participants - details.participants.length;

  // Participants section
  let participantsHTML = `
    <div class="participants-section">
      <strong>Participants:</strong>
      ${
        details.participants.length > 0
          ? `<ul class="participants-list">
              ${details.participants
                .map(
                  (participant) =>
                    `<li><span class="participant-badge">${participant}</span></li>`
                )
                .join("")}
            </ul>`
          : `<span class="no-participants">No participants yet</span>`
      }
    </div>
  `;

  activityCard.innerHTML = `
    <h4>${name}</h4>
    <p>${details.description}</p>
    <p><strong>Schedule:</strong> ${details.schedule}</p>
    <p><strong>Availability:</strong> ${spotsLeft} spots left</p>
    ${participantsHTML}
  `;

  activitiesList.appendChild(activityCard);

  // Add option to select dropdown
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  activitySelect.appendChild(option);
});

// ...existing code...