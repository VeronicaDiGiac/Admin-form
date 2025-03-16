const API_URL = "http://localhost:3000/students";

const accessToken = localStorage.getItem("accessToken");

if (!accessToken) {
  // se non trova il token fa il redirect su login
  window.location.href = "/login.html";
}

async function loadStudents() {
  try {
    const response = await fetch(`${API_URL}/list`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error loading students");
    }

    const data = await response.json();
    const studentsTable = document
      .getElementById("studentsTable")
      .getElementsByTagName("tbody")[0];
    studentsTable.innerHTML = "";

    data.students.forEach((student) => {
      studentsTable.innerHTML += `
          <tr class="border-b border-gray-300 hover:bg-gray-100 transition">
          <td class="px-4 py-2 text-gray-700">${student.name}</td>
          <td class="px-4 py-2 text-gray-700">${student.surname}</td>
          <td class="px-4 py-2 text-gray-700">${student.email}</td>
          <td class="px-4 py-2 text-gray-700">${student.className}</td>
          <td class="px-4 py-2 text-center">
            <button class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onclick="deleteStudent(${student.studentId})">
              Remove
            </button>
          </td>
        </tr>`;
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function deleteStudent(studentId) {
  try {
    const response = await fetch(`${API_URL}/remove/${studentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error deleting student");
    }

    await loadStudents();
  } catch (error) {
    console.error("Error:", error);
  }
}

document
  .getElementById("addStudentForm")
  .addEventListener("submit", addStudent);

async function addStudent(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const className = document.getElementById("class").value;

  try {
    const response = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ name, surname, email, className: className }),
    });

    if (!response.ok) {
      throw new Error("Error adding student");
    }

    await loadStudents();
  } catch (error) {
    console.error("Error:", error);
  }
}

loadStudents();
