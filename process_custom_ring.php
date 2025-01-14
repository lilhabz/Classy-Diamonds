<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $metal = $_POST['metal'] ?? '';
    $stoneShape = $_POST['stoneShape'] ?? '';
    $stoneSize = $_POST['stoneSize'] ?? '';
    $ringSize = $_POST['ringSize'] ?? '';
    $additionalNotes = $_POST['additionalNotes'] ?? '';

    // Handle file uploads (if any)
    if (!empty($_FILES['inspirationPhotos']['name'][0])) {
        foreach ($_FILES['inspirationPhotos']['tmp_name'] as $index => $tmpName) {
            $fileName = $_FILES['inspirationPhotos']['name'][$index];
            $destination = "uploads/" . basename($fileName);
            move_uploaded_file($tmpName, $destination);
        }
    }

    // Example email
    $to = "your_email@example.com"; // Replace with your real email
    $subject = "New Custom Ring Request";
    $body = "Metal: $metal\nStone Shape: $stoneShape\nStone Size: $stoneSize\nRing Size: $ringSize\nNotes: $additionalNotes\n";

    mail($to, $subject, $body);

    // Confirmation message
    echo "<h1>Your custom ring request has been submitted!</h1>";
} else {
    echo "<h1>Invalid Request</h1>";
}
