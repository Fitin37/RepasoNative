import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useFetchUser = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");

  // Estados para la lista de usuarios
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);


  const cleanState=()=>{
      setNombre("");
      setEdad("");
      setCorreo("");
  }

  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://retoolapi.dev/zZhXYF/movil");
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleGuardar = async (user) => {
    if (!nombre || !edad || !correo) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }

    const usuarioData = {
      nombre,
      edad: parseInt(edad),
      correo,
    };

    try {
      let response;

      if (user?.id) {
        response = await fetch(
          `https://retoolapi.dev/zZhXYF/movil/${user.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(usuarioData),
          }
        );

        if (response.ok) {
          Alert.alert("Éxito", "Usuario actualizado correctamente");
        } else {
          Alert.alert("Error", "No se pudo actualizar el usuario");
        }
      } else {
        response = await fetch("https://retoolapi.dev/zZhXYF/movil", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuarioData),
        });

        if (response.ok) {
          Alert.alert("Éxito", "Usuario creado correctamente");
        } else {
          Alert.alert("Error", "No se pudo crear el usuario");
        }
      }

      setNombre("");
      setEdad("");
      setCorreo("");
      fetchUsuarios();
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Ocurrió un error al guardar el usuario");
    }
  };

  const deleteUser = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`https://retoolapi.dev/zZhXYF/movil/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        Alert.alert("Error al eliminar");
        return;
      }
      Alert.alert("usuario eliminado");
      fetchUsuarios();
    } catch (error) {
      console.log("hubo un error al eliminar", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return {
    nombre,
    setNombre,
    edad,
    setEdad,
    correo,
    setCorreo,
    handleGuardar,
    usuarios,
    loading,
    fetchUsuarios,
    deleteUser,cleanState
  };
};

export default useFetchUser;
