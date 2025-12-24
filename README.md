# File Upload Web Application

This is a simple web application that allows users to upload files. It features a drag-and-drop interface and the ability to preview selected files before uploading.

## Features

*   **File Upload:** Users can select one or more files from their local machine to upload.
*   **File Preview:** Before uploading, users can see a list of selected files, including an image preview for image files.
*   **Remove Files:** Users can remove files from the list before uploading.
*   **Backend Storage:** Uploaded files are saved to an `uploads` directory on the server.

## Technologies Used

*   **Frontend:**
    *   HTML5
    *   CSS3
    *   JavaScript (ES6)

*   **Backend:**
    *   Node.js
    *   Express.js
    *   Multer (for handling file uploads)
    *   Body-Parser

*   **Development:**
    *   Parcel Bundler

## Setup and Usage

1.  **Prerequisites:**
    *   Node.js and npm installed on your machine.

2.  **Installation:**
    *   Clone the repository:
        ```bash
        git clone <repository-url>
        ```
    *   Navigate to the project directory:
        ```bash
        cd File-upload
        ```
    *   Install the dependencies:
        ```bash
        npm install
        ```

3.  **Running the Application:**
    *   Start the server:
        ```bash
        node app.js
        ```
    *   The application will be running at `http://localhost:3000`.

4.  **How to Use:**
    *   Open your web browser and go to `http://localhost:3000`.
    *   Click the "Upload File" button to select files from your computer.
    *   The selected files will be displayed in a list.
    *   You can remove files from the list by clicking the "Delete" button next to each file.
    *   Clicking the "Submit" button next to a file will initiate the upload process (Note: based on the current implementation, this submits all files in the list).

## File Structure

```
.
├── .gitignore
├── app.js              # Main Express server file
├── filelist.html       # HTML for displaying a list of files (currently a placeholder)
├── index.html          # Main HTML file for the upload form
├── index.js            # Client-side JavaScript for the upload form
├── main.css            # Styles for filelist.html
├── package-lock.json
├── package.json
├── readme              # Original readme file
├── style.css           # Styles for index.html
├── style.scss          # SCSS version of style.css
├── assets/             # Icons and images
└── uploads/            # Directory where uploaded files are stored (created automatically)
```
