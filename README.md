
# NASA APOD(Astronomical Picture of the Day)

The NASA APOD Application serves as my way of showcasing the Astronomical Pictures that originate from NASA's very own DataBase. To simply use the application, all you have to do is press the "Get Picture" button and you will see the their picture of the day. Below the picture, a lengthy description of the Image will appear to explain the context. 


## Screenshots
<img width="1424" alt="Screenshot 2024-06-02 at 5 05 04 PM" src="https://github.com/aadilq/NASA-APOD-Astronomical-Picture-of-The-Day-/assets/36612205/518be5f3-c494-4a1d-bf56-6ecf4a107229">



## API Reference

#### Get all items

```http
  https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`      | `YYYY-MM-DD` | The date of the APOD image to retrieve |



## Acknowledgements


https://api.nasa.gov/ 
## Authors

- [@aadilq](https://github.com/aadilq)

