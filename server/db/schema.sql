DROP TABLE IF EXISTS Comment;
DROP TABLE IF EXISTS Project;

-- Create Project Table
CREATE TABLE Project (
  ProjectID INT PRIMARY KEY AUTO_INCREMENT,
  ProjectName VARCHAR(255) NOT NULL,
  ProjectLink VARCHAR(255) NOT NULL,
  ProjectGit VARCHAR(255) NOT NULL,
  ProjectDesc VARCHAR(255) NOT NULL,
  ProjectIMG VARCHAR(255) NOT NULL,
  ProjectType VARCHAR(255) NOT NULL,
  ProjectGood BOOLEAN NOT NULL, 
  UNIQUE (ProjectID),
  UNIQUE (ProjectLink),
  UNIQUE (ProjectGit),
  UNIQUE (ProjectIMG),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Comment Table
CREATE TABLE Comment (
  CommentID INT PRIMARY KEY AUTO_INCREMENT,
  CommentDesc VARCHAR(255) NOT NULL,
  ProjectID INT NOT NULL,
  UNIQUE (CommentID),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_ProjectComment
  FOREIGN KEY (ProjectID)
  REFERENCES Project(ProjectID)
  ON DELETE CASCADE
);