using UnityEngine;
using System.Runtime.InteropServices;

public class FirebaseManager : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void GetJSON(string path, string objectName, string callback, string fallback);

    [DllImport("__Internal")]
    private static extern void GuardarPreguntaEnJS(string id, string pregunta, string opcionesJson, int respuestaCorrecta);

    public void FetchData(string path)
    {
        GetJSON(path, gameObject.name, "OnDataReceived", "OnDataError");
    }

    public void GuardarPregunta(string id, string pregunta, string opcionesJson, int respuestaCorrecta)
    {
        GuardarPreguntaEnJS(id, pregunta, opcionesJson, respuestaCorrecta);
    }

    // Métodos llamados cuando los datos se reciben correctamente
    public void OnDataReceived(string jsonData)
    {
        Debug.Log("Datos recibidos: " + jsonData);
        // Procesa los datos como sea necesario
    }

    // Métodos llamados cuando ocurre un error
    public void OnDataError(string error)
    {
        Debug.LogError("Error al recibir datos: " + error);
    }
}
