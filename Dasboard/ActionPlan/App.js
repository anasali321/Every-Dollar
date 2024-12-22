const goalList = document.getElementById('goal-list');
        const graph = document.getElementById('graph');
        const goals = [];

        function addGoal() {
            const name = document.getElementById('goal-name').value;
            const date = document.getElementById('goal-date').value;
            const target = document.getElementById('goal-target').value;
            const progress = document.getElementById('goal-progress').value;

            if (name === '' || date === '' || target === '' || progress === '') {
                alert('Please fill in all fields!');
                return;
            }

            const progressPercentage = Math.min((progress / target) * 100, 100);
            const goal = {
                name,
                date,
                target,
                progress,
                progressPercentage
            };
            goals.push(goal);

            renderGoals();

            document.getElementById('goal-name').value = '';
            document.getElementById('goal-date').value = '';
            document.getElementById('goal-target').value = '';
            document.getElementById('goal-progress').value = '';
        }

        function renderGoals() {
            goalList.innerHTML = '';
            graph.innerHTML = '';

            goals.forEach((goal, index) => {
                const goalElement = document.createElement('div');
                goalElement.className = 'goal';

                goalElement.innerHTML = `
                    <div class="goal-info">
                        <h3>${goal.name}</h3>
                        <p>Start Date: ${goal.date}</p>
                        <p>${goal.progress} / ${goal.target}</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${goal.progressPercentage}%;"></div>
                        <p>${goal.progressPercentage.toFixed(1)}%</p>
                    </div>
                `;

                goalList.appendChild(goalElement);

                const bar = document.createElement('div');
                bar.className = 'bar';
                bar.style.height = `${goal.progressPercentage * 2}px`;
                bar.setAttribute('data-value', `${goal.progressPercentage.toFixed(1)}%`);
                bar.innerHTML = `<span>${goal.name}</span>`;
                graph.appendChild(bar);
            });
        }

        function updateProgress() {
            const name = document.getElementById('update-goal-name').value;
            const newProgress = document.getElementById('update-progress-value').value;

            if (name === '' || newProgress === '') {
                alert('Please fill in all fields!');
                return;
            }

            const goal = goals.find(g => g.name === name);
            if (!goal) {
                alert('Goal not found!');
                return;
            }

            goal.progress = newProgress;
            goal.progressPercentage = Math.min((newProgress / goal.target) * 100, 100);

            renderGoals();

            document.getElementById('update-goal-name').value = '';
            document.getElementById('update-progress-value').value = '';
        }