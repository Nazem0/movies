document.body.insertAdjacentHTML('afterbegin',
            `<div class="navbar">
                <ul type="none">
                    <li><a class="active" href="#home">Home<img src="assets/data/house-solid.svg" alt=""></a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div id="filtering">
                        <input type="text" name="search" id="search" placeholder="Search By Title">
                        <select name="genre" id="genreFilter">
                            <option value="">Filter</option>
                        </select>
                    </div>
                    <ul type="none">
                    <li><a href="#news">Register</a></li>
                    <li><a href="#contact">Login</a></li>
                </ul>
            </div>`)
