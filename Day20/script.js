const apiKey = "06cab1b511dc8eb41b40e4ca2eb84a3e"

async function searchMovie() {
    const movieName = document.getElementById("movieInput").value.trim();
    const resultImg = document.getElementById("result");

    if (!movieName) {
        resultImg.innerHTML = "<p>Please enter a movie name</p>";
        return
    }

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            const movie = data.results[0];
            const imageUrl = movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/200x300?text=No+Image";
            
            resultImg.innerHTML = `
            <h3>${movie.title}</h3>
            <img src="${imageUrl}" alt="${movie.title}" />
            <p><strong>Release Date:</strong> ${movie.release_date || "N/A"}</p>
            <p><strong>Overview:</strong> ${movie.overview || "No description available"} </p>
            `;
        } else {
            resultImg.innerHTML = "<p>Movie not available</p>"
        }
    } catch (error) {
        resultImg.innerHTML = "<p>Error fetching movie data</p>"
        console.error(error);
    }

}