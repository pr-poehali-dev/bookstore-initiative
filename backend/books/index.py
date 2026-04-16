"""Получение списка книг из базы данных с фильтрацией по жанру и поиском."""
import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    params = event.get('queryStringParameters') or {}
    search = (params.get('search') or '').strip().lower()
    genre = (params.get('genre') or '').strip()

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    query = """
        SELECT id, title, author, genre, price, old_price,
               description, year, pages, publisher, badge, rating, cover, in_stock
        FROM t_p24146627_bookstore_initiative.books
        WHERE in_stock = TRUE
    """
    conditions = []
    args = []

    if search:
        conditions.append(
            "(LOWER(title) LIKE %s OR LOWER(author) LIKE %s OR LOWER(genre) LIKE %s)"
        )
        like = f'%{search}%'
        args += [like, like, like]

    if genre and genre != 'Все':
        conditions.append("genre = %s")
        args.append(genre)

    if conditions:
        query += ' AND ' + ' AND '.join(conditions)

    query += ' ORDER BY id'

    cur.execute(query, args)
    rows = cur.fetchall()
    cur.close()
    conn.close()

    cols = ['id', 'title', 'author', 'genre', 'price', 'old_price',
            'description', 'year', 'pages', 'publisher', 'badge', 'rating', 'cover', 'in_stock']

    books = [dict(zip(cols, row)) for row in rows]

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'books': books}, ensure_ascii=False),
    }
