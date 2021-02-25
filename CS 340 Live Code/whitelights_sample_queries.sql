-- This is the Example bsg queries page that has been edited for Team 86's implementation of WhiteLights Database Website

-- These are some Database Manipulation queries for a partially implemented Project Website 
-- using the bsg database.
-- Your submission should contain ALL the queries required to implement ALL the
-- functionalities listed in the Project Specs.

-- get all videos to populate welcome page - with video, user who uploaded, and score
SELECT video_id, uid, light_score FROM videos

-- get all competitions to populate welcome page - with competition name, lift type, and reps
SELECT competition_id, competition_name, lift_type, lift_reps FROM competitions

-- add a new profile (from Welcome Page)
INSERT INTO users (username, password, password, description, user_score) VALUES (:usernameInput, :passwordInput, :passwordInput, :descriptionInput, :user_scoreInput)

-- add a new video (Submit Video)
INSERT INTO videos (title, video_description, category, weight, uploader_weight) VALUES (:titleInput, :video_descriptionInput, :categoryInput, :weightInput, :uploader_weightInput)

-- add a new comment (Vote on Videos)
INSERT INTO videos (description, light_score) VALUES (:descriptionInput, :light_scoreInput)

-- update your profile (My Profile)
UPDATE users SET password = :passwordInput, user_score= :user_scoreInput, description = :descriptionInput WHERE username = :usernameInput

-- delete a video (My Profile)
DELETE FROM videos WHERE title = :video_nameInput AND uid = :uidInput AND category = :categoryInput AND light_score = :light_scoreINput

-- get all users that match any of the inputted values (Find a User)
SELECT users.user_id, username, description, user_score FROM users WHERE username = :usernameInput OR user_score = :user_scoreInput OR description = :descriptionInput

-- get all videos that match all of the inputted values (Find a Video)
SELECT videos.video_id, title, uid, category, weight, light_score FROM videos WHERE title = :videonameInput AND uid = :uidInput AND category = :lift_typeInput AND weight = :weight_classInput AND light_score = :light_scoreInput

-- get all competitions that match all of the inputted values (Find a Competition)
SELECT competitions.competition_id, competition_name, lift_type, weight_class, lift_reps FROM competitions WHERE competition_name = :competition_nameInput AND lift_type = :lift_typeInput AND weight_class = :weight_classInput AND lift_reps = :lift_repsInput

-- add a new competition (Create a Competition)
INSERT INTO competitions (competition_name, lift_type, weight_class, lift_reps) VALUES (:competition_nameInput, :lift_typeInput, :weight_classInput, :lift_repsInput)

-- find all competitions a video has been submitted to (Videos per Competition/Competitions per Video)
SELECT vid FROM videos_competitions WHERE cid = (SELECT compeition_id FROM competitions WHERE competition_name = :competition_nameInput AND lift_type = :lift_typeInput AND weight_class = :weight_classInput AND lift_reps = :lift_repsInput)

-- find all competitions a video has been submitted to (Videos per Competition/Competitions per Video)
SELECT cid FROM videos_competitions WHERE vid = (SELECT video_id FROM videos WHERE title = :videonameInput AND uid = :uidInput AND category = :lift_typeInput AND weight = :weight_classInput)

