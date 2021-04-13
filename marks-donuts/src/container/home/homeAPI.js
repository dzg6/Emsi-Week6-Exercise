// A mock function to mimic making an async request for data
export function fetchDonuts() {

  let url = 'http://localhost:5000/donuts';

  return new Promise((resolve) =>
      fetch(url)
  .then(response => response.json())
  .then(data => { 
    resolve({ data: data.data})
  }
    )
  );
};

export function updateDonut(donut) {

  let url = donut.Id ? 'http://localhost:5000/donut/' + donut.Id : 'http://localhost:5000/donut';
  let request = {
      method: donut.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(donut) // body data type must match "Content-Type" header
  }

  return new Promise((resolve) =>
      fetch(url, request)
  .then(response => response.json())
  .then(data => { 
    resolve({ data: data.data})
  }
    )
  );
};

export function fetchOrders() {

  let url = 'http://localhost:5000/orders';

  return new Promise((resolve) =>
      fetch(url)
  .then(response => response.json())
  .then(data => { 
    resolve({ data: data.data})
  }
    )
  );
};
export function refundOrder(order) {

  let url = 'http://localhost:5000/refund/' + order;
  let request = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order) // body data type must match "Content-Type" header
  }

  return new Promise((resolve) =>
      fetch(url, request)
  .then(response => response.json())
  .then(data => { 
    resolve({ data: data.data})
  }
    )
  );
};

export function createOrder(order) {
  console.log(order)

  let url = 'http://localhost:5000/order'
  let request = {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order) // body data type must match "Content-Type" header
  }

  return new Promise((resolve) =>
      fetch(url, request)
  .then(response => response.json())
  .then(data => { 
    resolve({ data: data.data})
  }
    )
  );
};