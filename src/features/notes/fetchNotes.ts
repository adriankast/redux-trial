// A mock function to mimic getting a token from a server
export function fetchNotes(token = "") {
    return new Promise<{ data: string[] }>((resolve, reject) =>
      setTimeout(() => {
        if (token === "myExampleToken") {
          resolve({ data: [
            "todo 1",
            "todo 2",
            "random note 3"
        ] });
        }
        else {
          reject();
        }
      }, 1000)
    );
  }
  