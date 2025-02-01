import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
});

test("adding movie to cart", () => {
    let cart = new Cart();

    let movie = new Movie(1, "asd", 100, 2011, "asd", "asd", ["asd"], 100)
    cart.add(movie);
    expect(cart.items[0]).toBe(movie);
})

test("adding book to cart", () => {
    let cart = new Cart();

    let book = new Book(1, "asd", "asd", 10, 511);
    cart.add(book);
    expect(cart.items[0]).toBe(book);
});

test("adding music album to cart", () => {
    let cart = new Cart();

    let album = new MusicAlbum(1, "asd", "asd", 15);
    cart.add(album);
    expect(cart.items[0]).toBe(album);
});

