import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const API = import.meta.env.VITE_APP_API_URL;

export default function Form() {
  const [form, setForm] = useState({
    title: "",
    release_year: "",
    favorite: false,
    game_system: "",
    game_image: "https://www.mooreseal.com/wp-content/uploads/2013/11/dummy-image-square.jpg",
  });
  const navigate = useNavigate();
  // for edit form
  const { id } = useParams()
  // console.log(id, "id")

  // handle text input
  function handleTextInput(event) {
    const id = event.target.id;
    const value = event.target.value;

    // setForm({...form, [id] : value})

    setForm((currentState) => {
      return {
        ...currentState,
        [id]: value,
      };
    });
  }

  // handle Checkbox
  function handleCheckbox(event) {
    const isChecked = event.target.checked;
    const id = event.target.id;

    // setForm({...form, [id] : isChecked})

    setForm((currentState) => {
      return {
        ...currentState,
        [id]: isChecked,
      };
    });
  }

  function listGameDates() {
    const dates = [];

    for (let i = 1958; i < 2025; i++) {
      dates.push(i);
    }
    return dates;
  }

  const gameDates = listGameDates();

  // on submit post new
  function submitNewVideogame(event) {
    event.preventDefault();
    axios
      .post(`${API}/videogame`, {
        ...form,
        release_year: Number(form.release_year),
      })
      .then((res) => navigate(`/videogames/${res.data.id}`))
      .catch((err) => console.log(err));
  }

  // on submit edit
    function submitEditForm (event) {
      event.preventDefault()

      axios.put(`${API}/videogame/${id}`, {
        ...form,
        release_year: Number(form.release_year)
      })
      .then(res => navigate(`/videogames/${id}`))
      .catch(err => console.log(err))
    }

  useEffect(() => {
    if(form.game_image=== ""){
      setForm((currentState) => {
        return {
          ...currentState,
          game_image : "https://www.mooreseal.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
        }
      })
    }
  },[form.game_image])

  useEffect(() => {
    if(id){
      axios.get(`${API}/videogame/${id}`)
      .then(res => setForm(res.data))
      .catch(err => console.log(err))
    }
  }, [])
 

  return (
    <div className="formPage flexContainer">
      <form
        onSubmit={(e) => {
          id ? submitEditForm(e) :
          submitNewVideogame(e)
        }}
        className="form gridCenter"
      >
        {/* title */}
        <label htmlFor="title">
          <span>Title:</span>

          <input
            id="title"
            type="text"
            value={form.title}
            required
            onChange={(e) => {
              handleTextInput(e);
            }}
          />
        </label>

        {/* game_system */}
        <label htmlFor="game_system">
          <span>Console:</span>

          <input
            type="text"
            id="game_system"
            placeholder="PS5, Nintendo DS, PC, Xbox"
            value={form.game_system}
            onChange={(e) => handleTextInput(e)}
          />
        </label>

        {/* favorite -> checkbox */}
        <label htmlFor="favorite">
          <span>Favorite:</span>

          <input
            id="favorite"
            type="checkbox"
            value={form.favorite}
            checked={form.favorite}
            onChange={(e) => {
              handleCheckbox(e);
            }}
          />
        </label>

        {/* release_year */}
        <label>
          <span>Release Year:</span>

          <select
            id="release_year"
            onChange={(e) => handleTextInput(e)}
            value={form.release_year}
          >
            <option value="">Select a Year</option>

            {gameDates.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </select>
        </label>

        {/* image url */}
        <label htmlFor="game_image">
          <span>Game Image Url:</span>
          <input
            type="url"
            id="game_image"
            value={form.game_image}
            pattern="https://.*"
            placeholder="https://image.com"
            onChange={(e) => handleTextInput(e)}
          />
        </label>

        {/* submit */}

        <input 
        className="formSubmitButton"
        type="submit" 
        value={ id ? "Edit Videogame":"Add Videogame"}
         />
      </form>

      <img
        className="formPage_image"
        src={form.game_image}
        alt="no image added"
      />
    </div>
  );
}
