<?php
$HOST = '127.0.0.1';
$USER = 'root';
$PASSWORD = null;
$DB_NAME = 'szkolenia';

$conn = mysqli_connect($HOST, $USER, $PASSWORD, $DB_NAME);

if (!$conn){
    die("blad polaczenia" . mysqli_connect_error());
}

$issent = "";
if (isset($_POST['add_data_btn'])){
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $age = $_POST['age'];

    if ($name && $surname && $age){
        $stmt = $conn->prepare('insert into uczestnicy(imie, nazwisko, wiek) values(?, ?, ?);');
        $stmt->bind_param('ssi', $name, $surname, $age);
        $is_done = $stmt->execute();
        if ($is_done){
            $issent = "Dane uczestnika $name $surname zostały dodane";
        }
        else {
            $issent = "Wystepil blad";
        }
    }
    else {
        $issent = "Wprowadź wszystkie dane";
    }
}
?>


<!DOCTYPE 'html'>
<head>
    <meta lang="pl">
    <title>Szkolenia i kursy</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
<header>
    <h1>SZKOLENIA</h1>
</header>
<main>
    <section class="left">
        <table>
            <thead>
            <tr>
                <td>Kurs</td>
                <td>Nazwa</td>
                <td>Cena</td>
            </tr>
            </thead>
            <tbody>
                <?php
                $SQL = 'select kod, nazwa, cena from kursy order by cena desc;';
                $result = mysqli_query($conn, $SQL);

                while ($row = $result->fetch_row()){
                    echo '<tr>';
                    echo "<td><img src='zalacznik/$row[0].jpg' alt='kurs' width='150px' height='150px'></td>";
                    echo "<td>$row[1]</td>";
                    echo "<td>$row[2]</td>";
                    echo '</tr>';
                }
                ?>
            </tbody>
        </table>
    </section>
    <section class="right">
        <form action="#" method="post">
            <h2>
                Zapisy na kursy
            </h2>
            <label for="input_name">Imię</label>
            <input type="text" id="input_name" name="name">
            <label for="input_surname">Nazwisko</label>
            <input type="text" id="input_surname" name="surname">
            <label for="input_age">Wiek</label>
            <input type="text" id="input_age" name="age">
            <label for="select_course_type">Rodzaj kursu</label>
            <select id="select_course_type">
                <?php
                $SQL = 'select nazwa from kursy;';
                $result = mysqli_query($conn, $SQL);

                while ($row = $result->fetch_row()){
                    echo "<option>$row[0]</option>";
                }
                ?>
            </select>
            <button type="submit" name="add_data_btn">Dodaj dane</button>
            <p><?php echo $issent; ?></p>
        </form>
    </section>
</main>
<footer>
    <p>Stronę wykonał: нихуя блять не фронтэнд</p>
</footer>
</body>
