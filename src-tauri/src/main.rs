// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[derive(Debug, thiserror::Error)]
enum Error {
    #[error(transparent)]
    Io(#[from] std::io::Error),
    #[error("Error de Base de Datos: {0}")]
    DataBaseError(#[from] rusqlite::Error),
    // #[error("Error al iniciar la transacción: {0}")]
    // TransactionError(rusqlite::Error),

    // #[error("Error al confirmar la transacción: {0}")]
    // CommitError(rusqlite::Error),
}

// we must manually implement serde::Serialize
impl serde::Serialize for Error {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::ser::Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}

// use tauri::{Manager, Window};

// Create the command:
// This command must be async so that it doesn't run on the main thread.

// #[tauri::command]
// async fn close_splashscreen(window: Window) {
//   // Close splashscreen
//   window.get_window("splashscreen").expect("no window labeled 'splashscreen' found").close().unwrap();
//   // Show main window
//   window.get_window("main").expect("no window labeled 'main' found").show().unwrap();
// }

// use rusqlite::{Connection, Result};

// conn.execute(
//     "INSERT INTO clients (name,dni,phone)VALUES(?1,?2,?3)",
//     ("MOnoaraña", "856959", "989898"),
// )?;

// conn.execute(
//     "CREATE TABLE IF NOT EXISTS SALE(
//   id INTEGER PRIMARY KEY,
//   total TEXT NOT NULL
// )",
//     (),
// )?;
// conn.execute(
//     "
//     CREATE TABLE sale_item (
//       item_id INTEGER PRIMARY KEY,
//       sale_id INTEGER,
//       product_name TEXT,
//       quantity INTEGER,
//       price REAL,
//       FOREIGN KEY (sale_id) REFERENCES sale(sale_id)
//   )
// ",
//  vscode-file://vscode-app/d:/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html   (),
// )?;
//
use rusqlite::{Connection, Result};

// #[derive(serde::Serialize)]
// struct CustomResponse {
//     message: String,
//     other_val: usize,
// }
// #[tauri::command]
// fn realisql() {
//     if let Err(e) = insertsql() {
//         eprintln!("Error setting up database: {:?}", e);
//     }
// }

#[tauri::command]
fn insertsql() -> Result<(), Error> {
    // std::fs::File::open("path/that/does/not/exist")?;
    let mut conn = Connection::open("pruebaDB.sqlite").expect("error conectionnn");

    // Iniciar una transacción
    let transaction = conn.transaction()?;

    // Insertar una venta
    transaction.execute(
        "INSERT INTO sale (customer_name, sale_date, total_amount) VALUES (?, ?, ?)",
        &["Roberto", "2023-11-21", "150.00"],
    )?;

    // Obtener el ID de la venta recién insertada
    let venta_id = transaction.last_insert_rowid();
    // let venta_id_str = venta_id.to_string();

    // Insertar productos para la venta
    // Producto 1
    transaction.execute(
        "INSERT INTO sale_item (sale_id, product_name, quantity, price) VALUES (?, ?, ?, ?)",
        [
            venta_id.to_string(),
            "Producto 1".to_string(),
            "2".to_string(),
            "50.00".to_string(),
        ],
    )?;

    // Producto 2
    transaction.execute(
        "INSERT INTO sale_item (sale_id, product_name, quantity, price) VALUES (?, ?, ?, ?)",
        [
            venta_id.to_string(),
            "Producto 2".to_string(),
            "1".to_string(),
            "50.00".to_string(),
        ],
    )?;

    // Confirmar la transacción para aplicar los cambios
    transaction.commit()?;

    Ok(())
}

// Register the command:
fn main() {
    // tauri_build::build()
    tauri::Builder::default()
        // Add this line
        .invoke_handler(tauri::generate_handler![insertsql])
        .run(tauri::generate_context!())
        .expect("failed to run app");

    // if let Err(e) = insertsql() {
    //     eprintln!("Error setting up database: {:?}", e);
    // }
}

// fn main() {
//   tauri::Builder::default()
//     .run(tauri::generate_context!())
//     .expect("error while running tauri application");
// }
