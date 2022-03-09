SELECT name FROM goods
WHERE category_id IN (SELECT id FROM categories WHERE state = 'published');
