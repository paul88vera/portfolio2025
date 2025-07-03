-- Insert seed data into Project table
INSERT INTO Project 
  (ProjectName, ProjectLink, ProjectGit, ProjectDesc, ProjectIMG, ProjectType, ProjectGood)
VALUES
  ('Portfolio Website', 'https://example.com/portfolio', 'https://github.com/user/portfolio', 'A personal portfolio built with React.', 'https://example.com/images/portfolio.png', 'Web', TRUE),
  ('Todo App', 'https://example.com/todo', 'https://github.com/user/todo', 'A simple todo list app with Node.js backend.', 'https://example.com/images/todo.png', 'App', TRUE),
  ('Weather Dashboard', 'https://example.com/weather', 'https://github.com/user/weather', 'Weather app using OpenWeatherMap API.', 'https://example.com/images/weather.png', 'Web', FALSE);

-- Insert seed data into Comment table
INSERT INTO Comment (ProjectID, CommentDesc) VALUES
  (1, 'Great layout and responsive design!'),
  (1, 'Loved the animations and clean code.'),
  (2, 'Simple and effective. Nice work!'),
  (3, 'Could use a dark mode option.');