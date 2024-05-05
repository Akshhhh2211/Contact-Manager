import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      const { first_name, last_name, mob } = action.payload;

      if (first_name === "" || last_name === "" || mob === "") {
        alert('Please fill in all your details');
        return state;
      }

      const nameExists = state.contacts.some(contact =>
        contact.first_name === first_name && contact.last_name === last_name
      );

      if (nameExists) {
        alert('You are already registered');
        return state;
      }

      alert('Contact saved successfully!');
      const updatedContacts = [...state.contacts, { id: state.contacts.length + 1, ...action.payload }];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));

      return {
        ...state,
        contacts: updatedContacts,
      };
    }

    case REMOVE_CONTACT: {
      const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload.id);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));

      return {
        ...state,
        contacts: updatedContacts,
      };
    }

    case EDIT_CONTACT: {
      const { id, first_name, last_name, mob } = action.payload;

      if (first_name === "" || last_name === "" || mob === "") {
        alert('Please complete all the required fields');
        return state;
      }

      const nameExists = state.contacts.some(contact =>
        contact.id !== id && contact.first_name === first_name && contact.last_name === last_name
      );

      if (nameExists) {
        alert("Your Contact already exists.");
        return state;
      }

      alert('Your Contact has been updated!');
      const updatedContacts = state.contacts.map(contact =>
        contact.id === id ? { ...action.payload } : contact
      );

      localStorage.setItem("contacts", JSON.stringify(updatedContacts));

      return {
        ...state,
        contacts: updatedContacts,
      };
    }

    default:
      return state;
  }
};

export default reducer;
