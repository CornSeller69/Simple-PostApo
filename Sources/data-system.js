function saveData() {
      w("Saving game data...");
      let data = `
      playername = ${playername};
      playersex = ${playersex};
      `;
      let filename = geid('nazwapliku').value + ".hpasave";
      const blob = new Blob([data], { type: 'text/plain' });
      const link = document.createElement('a');
      link.download = filename;
      link.href = window.URL.createObjectURL(blob);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
}

function loadData() {
      let fileInput = geid('file-input');
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
      const fileContent = event.target.result;
      l(fileContent);

        // Here you can use the fileContent as needed in your JavaScript
        // For example, you can process or display the data
        // If the file contains JavaScript code, be cautious when executing it
        // You can use the eval function to execute the code
      try {
            eval(fileContent);
      } catch (error) {
            console.error('Error executing the file content:', error);
      }
      };

      if (file) {
            reader.readAsText(file);
      } else {
            w('No file selected');
      }
      startGame2();
}
