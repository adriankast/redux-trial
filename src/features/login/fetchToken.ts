// A mock function to mimic getting a token from a server
export const fetchToken = (password = "") => {
    return new Promise<{ data: string }>((resolve, reject) =>
      setTimeout(() => {
        if (password === "secret") {
          resolve({ data: "myExampleToken" });
        }
        else {
          reject();
        }
      }, 1000)
    );
  }
  